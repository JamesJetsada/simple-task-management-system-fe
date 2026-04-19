# Simple Task Management System

ระบบจัดการงาน (Task Management) พัฒนาด้วย Angular 21

## ข้อกำหนดเบื้องต้น (Prerequisites)

- Node.js 18+ 
- Angular CLI 21+


## การติดตั้ง (Installation)

1. Clone โปรเจค
```bash
git clone <repository-url>
cd simple-task-management-system
```

2. ติดตั้ง dependencies
```bash
npm install
```

3. รัน development server
```bash
ng serve
```

4. เปิดเบราว์เซอร์ไปที่ `http://localhost:4200`




## การตั้งค่า API (API Configuration)

- Runing on Java SDK Version 18

- Backend API running at `http://localhost:8080`

```typescript
private apiUrl = 'http://localhost:8080/api/tasks';
```

## การสร้าง Git Repository และ Push ขึ้น GitHub

### 1. สร้าง Repository บน GitHub
1. ไปที่ https://github.com
2. คลิก **"New"** หรือ **"+"** > **"New repository"**
3. ตั้งชื่อ Repository (เช่น `simple-task-management-system`)
4. เลือก Public หรือ Private
5. **ไม่ต้อง** เลือก "Add a README file" (เพราะเรามีอยู่แล้ว)
6. คลิก **"Create repository"**

### 2. เริ่มต้น Git ในโปรเจค (ครั้งแรก)

```bash
# เข้าไปใน folder โปรเจค
cd simple-task-management-system

# สร้าง git repository
git init

# เพิ่มไฟล์ทั้งหมด
git add .

# Commit ครั้งแรก
git commit -m "Initial commit: Simple Task Management System"

# ตั้งชื่อ branch หลักเป็น main
git branch -M main

# เชื่อมต่อกับ GitHub (เปลี่ยน <username> เป็นชื่อ GitHub ของคุณ)
git remote add origin https://github.com/<username>/simple-task-management-system.git

# Push ขึ้น GitHub
git push -u origin main
```

### 3. การ Push การเปลี่ยนแปลงครั้งต่อไป

```bash
# ดูสถานะไฟล์ที่เปลี่ยนแปลง
git status

# เพิ่มไฟล์ที่ต้องการ commit
git add .

# หรือเพิ่มเฉพาะไฟล์
git add src/app/components/home/home.ts

# Commit พร้อมข้อความ
git commit -m "feat: add new feature"

# Push ขึ้น GitHub
git push
```

### 4. ดึงโค้ดล่าสุดจาก GitHub

```bash
git pull origin main
```

### 5. สร้าง Branch ใหม่

```bash
# สร้างและสลับไป branch ใหม่
git checkout -b feature/new-feature

# Push branch ใหม่ขึ้น GitHub
git push -u origin feature/new-feature
```

### Commit Message Convention

แนะนำให้ใช้รูปแบบ:
- `feat:` - เพิ่มฟีเจอร์ใหม่
- `fix:` - แก้ bug
- `docs:` - แก้ไขเอกสาร
- `style:` - แก้ไข format โค้ด
- `refactor:` - ปรับปรุงโค้ด

ตัวอย่าง:
```bash
git commit -m "feat: add delete task function"
git commit -m "fix: resolve date format issue"
git commit -m "docs: update README"
```
