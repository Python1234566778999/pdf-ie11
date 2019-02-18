import React, { Component, Fragment } from "react";
import { PdfRenderer } from "react-pdfjs-multi";
import "react-pdfjs-multi/dist/react-pdfjs-multi.css";

const PdfjsLib = require("pdfjs-dist");
// const PdfjsLib = require('pdfjs-dist/build/pdf');
// const PdfjsLib = require('../node_modules/pdfjs-dist/build/pdf');
// This needs to be copied from node_modules/pdfjs-dist to static folder
// PdfjsLib.GlobalWorkerOptions.workerSrc = "build/pdf.worker.min.js";
PdfjsLib.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";
// PdfjsLib.GlobalWorkerOptions.workerSrc = "pdf.worker.min.40.js";
// PdfjsLib.GlobalWorkerOptions.workerSrc = "pdf.worker.min.35.js";

type Props = {};

class DocViewer extends Component<Props> {
  worker: any;

  state: {
    pdfDoc: any;
  } = { pdfDoc: null };

  constructor(props: Props) {
    super(props);
    // this.worker = new PdfjsLib.PDFWorker('pdf-viewer');
  }

  async componentDidMount() {
    const pdfDoc = await PdfjsLib.getDocument({ url: "bla.pdf" });
    // const pdfDoc = await PdfjsLib.getDocument({ url: "compressed.tracemonkey-pldi-09.pdf"});
    // const pdfDoc = await PdfjsLib.getDocument({ url: "bla.pdf", worker: this.worker });
    // const pdfDoc = await PdfjsLib.getDocument({ url: "compressed.tracemonkey-pldi-09.pdf", worker: this.worker });
    this.setState(() => ({ pdfDoc }));
  }

  render() {
    const { pdfDoc } = this.state;

    if (!pdfDoc) {
      return false;
    }
    return (
      <Fragment>
        <ul className="examples-nav">Test PDF Viewer</ul>
        <div className="examples">
          <PdfRenderer pdfDoc={pdfDoc} />
        </div>
      </Fragment>
    );
  }
}

export default DocViewer;
