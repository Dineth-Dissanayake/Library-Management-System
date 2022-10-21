import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFIssueBooks = LMS => {
    const doc = new jsPDF();

    const tabColum =["Book ID","Student ID","Date"];
    const tableRows = [];

    LMS.forEach(issueBook => {
        const issueBookData = [
            issueBook.bookId,
            issueBook.studentId,
            issueBook.date
        ];
        tableRows.push(issueBookData);
        
    });
    doc.autoTable(tabColum,tableRows,{startY:20});
    doc.text("All Issued Books Details",75,13);
    doc.save('IssuedBookDetailsReport.pdf');
};

export default generatePDFIssueBooks;