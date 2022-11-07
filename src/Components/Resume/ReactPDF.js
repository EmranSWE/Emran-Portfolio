import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfResume from "../../Assets/Updated  emran resume.pdf";

const ReactPDF = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
        <div>
      <Document file={pdfResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    );
};

export default ReactPDF;