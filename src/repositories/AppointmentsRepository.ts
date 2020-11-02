import { isEqual } from 'date-fns';

import Appointment from '../models/Appointments';

interface CreateAppointment {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appoitment =>
      isEqual(appoitment.date, date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointment): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
