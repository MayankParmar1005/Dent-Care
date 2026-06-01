import Types "../types/appointments";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type AppointmentRecord = Types.AppointmentRecord;
  public type SubmitResult = Types.SubmitResult;

  public func submit(
    appointments : List.List<AppointmentRecord>,
    nextId : { var value : Nat },
    name : Text,
    phone : Text,
    date : Text,
    time : Text,
    message : Text,
  ) : SubmitResult {
    let id = nextId.value;
    nextId.value += 1;
    let record : AppointmentRecord = {
      id;
      name;
      phone;
      date;
      time;
      message;
      timestamp = Time.now();
    };
    appointments.add(record);
    { ok = true; message = "Appointment submitted successfully." };
  };

  public func getAll(appointments : List.List<AppointmentRecord>) : [AppointmentRecord] {
    appointments.toArray();
  };
};
