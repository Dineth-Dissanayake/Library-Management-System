import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFIssueBooks = IssueBooks => {
    const doc = new jsPDF();

    const tabColum =["Book ID","Student ID","Issued Date"];
    const tableRows = [];

    IssueBooks.forEach(IBook => {
        const IBookData = [
            IBook.bookId,
            IBook.studentId,
            IBook.date
        ];
        tableRows.push(IBookData);
        
    });
    doc.autoTable(tabColum,tableRows,{startY:20});
    doc.text("ALL ISSUE BOOK DETAILS IN SYSTEM",55,13);
    doc.save('IssueBookReport.pdf');
};

export default generatePDFIssueBooks;