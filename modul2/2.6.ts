{
    // 
    const addCourseStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = 'web development'
        return {
            ...student,
            course
        }
    }

    type StudentType = {
        id: number;
        name: string;
        email: string;
    }


    const student1 = addCourseStudent<StudentType>({ id: 123, name: 'tuhin', email: 'tuhin@gmail.com' })

    interface StudentType1 {
        id: number;
        name: string;
        email: string
    }
    const studentInfo = { id: 12, name: 'mahmud', email: 'mahmud@gmail.com' }
    const student2 = addCourseStudent<StudentType1>(studentInfo)












    // 
}