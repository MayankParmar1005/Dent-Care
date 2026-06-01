module {
  public type AppointmentRecord = {
    id : Nat;
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    message : Text;
    timestamp : Int;
  };

  public type SubmitResult = {
    ok : Bool;
    message : Text;
  };
};
