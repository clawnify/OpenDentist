-- Fictional practice records for the disposable template preview.
INSERT INTO operatories (id, name, color, sort_order) VALUES
 (1, 'Room 1', 'sky', 0), (2, 'Room 2', 'emerald', 1);
INSERT INTO practitioners (id, name, role, color, email) VALUES
 (1, 'Dr. Lee', 'dentist', 'teal', 'lee@example.test'),
 (2, 'Sam Taylor', 'hygienist', 'rose', 'sam@example.test');
INSERT INTO treatment_types (id, code, name, duration_minutes, default_fee, color) VALUES
 (1, 'EXAM', 'Exam and cleaning', 30, 120, 'sky'),
 (2, 'CONS', 'Consultation', 20, 80, 'emerald');
INSERT INTO patients (id, first_name, last_name, email, notes, referral_source) VALUES
 (1, 'Jamie', 'Rivera', 'jamie@example.test', 'Prefers morning appointments. Fictional demo patient.', 'Friend'),
 (2, 'Casey', 'Morgan', 'casey@example.test', 'Fictional demo patient.', 'Website'),
 (3, 'Riley', 'Chen', 'riley@example.test', 'Fictional demo patient.', 'Friend');
INSERT INTO appointments (patient_id, practitioner_id, operatory_id, treatment_type_id, start_time, end_time, status) VALUES
 (1, 1, 1, 1, date('now') || 'T09:00:00', date('now') || 'T09:30:00', 'completed'),
 (2, 2, 2, 1, date('now') || 'T14:00:00', date('now') || 'T14:30:00', 'scheduled'),
 (3, 1, 1, 2, date('now', '+1 day') || 'T10:00:00', date('now', '+1 day') || 'T10:20:00', 'scheduled');
