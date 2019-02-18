import React, { Component, Fragment } from "react";
import { PdfRenderer } from "react-pdfjs-multi";
import "react-pdfjs-multi/dist/react-pdfjs-multi.css";

const PdfjsLib = require("pdfjs-dist");
// This needs to be copied from node_modules/pdfjs-dist to static folder
// PdfjsLib.GlobalWorkerOptions.workerSrc = "build/pdf.worker.min.js";
PdfjsLib.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

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
