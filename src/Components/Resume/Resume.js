import React, { useState, useEffect } from "react";
import pdfResume from "../../Assets/Updated  emran resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
//   "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

const Resume = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (
         <div >
        <div className="grid justify-items-center my-4  ">
        <a  href={pdfResume}>
        <button class="btn btn-primary"
        target='_blank'
          >
            < AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </a>
        
          <div>
          <Document file={pdfResume} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>
        </div>

        

        <div className="grid justify-items-center">
          <button class="btn btn-primary"
            href={pdfResume}
            target="_blank" 
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </button>
        </div>

      
         
    </div>
    );
};

export default Resume;