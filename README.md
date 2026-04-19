# Simple Task Management System

ระบบจัดการงาน (Task Management) 
- **Frontend:** Angular 21
- **Backend:** Java Spring Boot + Maven

---

## ข้อกำหนดเบื้องต้น (Prerequisites)

### Frontend
- Node.js 18+ 
- Angular CLI 21+

### Backend
- JDK 18+
- Maven 3.8+

---

## การติดตั้ง Backend (Java Spring Boot)

### 1. Clone โปรเจค Backend
```bash
git clone <backend-repository-url>
cd simple-task-management-system-api
```

### 2. ตรวจสอบ Java Version
```bash
java -version
# ควรแสดง: openjdk version "18.x.x" หรือสูงกว่า
```

### 3. Build และ Run ด้วย Maven
```bash
# Build project
mvn clean install

# Run application
mvn spring-boot:run
```

หรือ Run ด้วย JAR:
```bash
mvn clean package
java -jar target/simple-task-management-system-0.0.1-SNAPSHOT.jar
```

### 4. ตรวจสอบ API
Backend จะรันที่ `http://localhost:8080`

ทดสอบ API:
```bash
curl http://localhost:8080/api/tasks
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | ดึงรายการงานทั้งหมด |
| GET | `/api/tasks/{id}` | ดึงงานตาม ID |
| POST | `/api/tasks` | สร้างงานใหม่ |
| PUT | `/api/tasks/{id}` | แก้ไขงาน |
| DELETE | `/api/tasks/{id}` | ลบงาน |

### Task Model (JSON)
```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "priority": "LOW | MEDIUM | HIGH",
  "dueDate": "2026-04-20",
  "status": "TODO | IN_PROGRESS | DONE"
}
```

---

## การติดตั้ง Frontend (Angular)

### 1. Clone โปรเจค Frontend
```bash
git clone https://github.com/JamesJetsada/simple-task-management-system-fe.git
cd simple-task-management-system-fe
```

### 2. ติดตั้ง dependencies
```bash
npm install
```

### 3. รัน development server
```bash
ng serve
```

### 4. เปิดเบราว์เซอร์ไปที่ `http://localhost:4200`

---

## การตั้งค่า API URL

แก้ไขไฟล์ `src/app/services/task.ts`:
```typescript
private apiUrl = 'http://localhost:8080/api/tasks';
```

---

## วิธี Run ทั้งระบบ

1. **เปิด Terminal 1** - รัน Backend:
```bash
cd backend-project
mvn spring-boot:run
```

2. **เปิด Terminal 2** - รัน Frontend:
```bash
cd simple-task-management-system-fe
ng serve
```

3. เปิดเบราว์เซอร์ไปที่ `http://localhost:4200`

