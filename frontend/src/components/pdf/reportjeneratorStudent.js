import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFAllStudents = AllStudents => {
    const doc = new jsPDF();

    const tabColum =["Full Name","Registred Number","NIC","Faculty","Semester","Contaact Number", "Address"];
    const tableRows = [];

    AllStudents.forEach(rStudents => {
        const rStudentsData = [
            rStudents.fullName,
            rStudents.regNumber,
            rStudents.NIC,
            rStudents.faculty,
            rStudents.semester,
            rStudents.contactNumber,
            rStudents.address
        ];
        tableRows.push(rStudentsData);
        
    });
    doc.autoTable(tabColum,tableRows,{startY:20});
    doc.text("ALL REGISTRED STUDENTS IN SYSTEM",45,13);
    doc.save('AllStudentsReport.pdf');
};

export default generatePDFAllStudents;