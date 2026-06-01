import Types "../types/appointments";
import AppointmentsLib "../lib/appointments";
import List "mo:core/List";

mixin (
  appointments : List.List<Types.AppointmentRecord>,
  nextAppointmentId : { var value : Nat },
) {
  public func submitAppointment(
    name : Text,
    phone : Text,
    date : Text,
    time : Text,
    message : Text,
  ) : async { ok : Bool; message : Text } {
    AppointmentsLib.submit(appointments, nextAppointmentId, name, phone, date, time, message);
  };

  public query func getAppointments() : async [Types.AppointmentRecord] {
    AppointmentsLib.getAll(appointments);
  };
};
