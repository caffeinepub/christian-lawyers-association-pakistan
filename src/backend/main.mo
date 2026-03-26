import Time "mo:core/Time";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import List "mo:core/List";
import Int "mo:core/Int";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type NewsEvent = {
    title : Text;
    date : Time.Time;
    excerpt : Text;
    imageUrl : ?Text;
  };

  type LeadershipProfile = {
    name : Text;
    title : Text;
    bio : Text;
    imageUrl : ?Text;
  };

  module NewsEvent {
    public func compareByDate(a : NewsEvent, b : NewsEvent) : Order.Order {
      Int.compare(b.date, a.date);
    };
  };

  public type Admin = {
    principal : Principal;
  };

  let admins = List.fromArray<Admin>([{ principal = Principal.fromText("2vxsx-fae") }]);
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  let newsEvents = Map.empty<Nat, NewsEvent>();
  let leadershipProfiles = Map.empty<Nat, LeadershipProfile>();

  var nextContactId = 0;
  var nextNewsId = 0;
  var nextProfileId = 0;

  func isAdminId(adminPrincipal : Principal) : Bool {
    admins.any(
      func(admin) {
        admin.principal == adminPrincipal;
      }
    );
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(nextContactId, submission);
    nextContactId += 1;
  };

  public shared ({ caller }) func addNewsEvent(news : NewsEvent) : async Nat {
    if (not isAdminId(caller)) {
      Runtime.trap("Only admin can add news/events");
    };
    let id = nextNewsId;
    newsEvents.add(id, news);
    nextNewsId += 1;
    id;
  };

  public shared ({ caller }) func removeNewsEvent(id : Nat) : async () {
    if (not isAdminId(caller)) {
      Runtime.trap("Only admin can remove news/events");
    };
    if (not newsEvents.containsKey(id)) {
      Runtime.trap("News/event not found");
    };
    newsEvents.remove(id);
  };

  public shared ({ caller }) func addLeadershipProfile(profile : LeadershipProfile) : async Nat {
    if (not isAdminId(caller)) {
      Runtime.trap("Only admin can add leadership profiles");
    };
    let id = nextProfileId;
    leadershipProfiles.add(id, profile);
    nextProfileId += 1;
    id;
  };

  public shared ({ caller }) func removeLeadershipProfile(id : Nat) : async () {
    if (not isAdminId(caller)) {
      Runtime.trap("Only admin can remove leadership profiles");
    };
    if (not leadershipProfiles.containsKey(id)) {
      Runtime.trap("Leadership profile not found");
    };
    leadershipProfiles.remove(id);
  };

  public query ({ caller }) func getAllNewsEvents() : async [NewsEvent] {
    newsEvents.values().toArray().sort(NewsEvent.compareByDate);
  };

  public query ({ caller }) func getAllLeadershipProfiles() : async [LeadershipProfile] {
    leadershipProfiles.values().toArray();
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    if (not isAdminId(caller)) {
      Runtime.trap("Only admin can view contact submissions");
    };
    contactSubmissions.values().toArray();
  };
};
