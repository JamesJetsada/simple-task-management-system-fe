export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}