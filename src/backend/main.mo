import Types "types/appointments";
import AppointmentsMixin "mixins/appointments-api";
import List "mo:core/List";

actor {
  let appointments = List.empty<Types.AppointmentRecord>();
  let nextAppointmentId = { var value : Nat = 0 };

  include AppointmentsMixin(appointments, nextAppointmentId);
};
