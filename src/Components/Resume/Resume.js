import React, { useState, useEffect } from "react";
import pdfResume from "../../Assets/emran-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownloadClick = () => {
    // Create an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = pdfResume;
    link.target = "_blank";
    link.download = "emran-resume.pdf"; // Specify the file name for download
    link.click();
  };

  return (
    <div>
      <div className="grid justify-items-center my-4 ">
        <button className="btn btn-primary" onClick={handleDownloadClick}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </button>
      </div>
    </div>
  );
};

export default Resume;
