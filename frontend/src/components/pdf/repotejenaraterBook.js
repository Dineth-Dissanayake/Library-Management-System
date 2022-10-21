import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDFLibraryBooks = LibraryBooks => {
    const doc = new jsPDF();

    const tabColum =["Book ID","Title","Auther Name","Book Category","Count","Description"];
    const tableRows = [];

    LibraryBooks.forEach(lBooks => {
        const lBooksData = [
            lBooks.bookId,
            lBooks.title,
            lBooks.autherName,
            lBooks.bCategory,
            lBooks.count,
            lBooks.description
        ];
        tableRows.push(lBooksData);
        
    });
    doc.autoTable(tabColum,tableRows,{startY:20});
    doc.text("ALL BOOK DETAILS IN LIBRARY SYSTEM",50,13);
    doc.save('LibraryBooksReport.pdf');
};

export default generatePDFLibraryBooks;