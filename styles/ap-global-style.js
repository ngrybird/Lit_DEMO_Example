import { css, cssLiteral  } from 'lit-element';

const mainColor = cssLiteral `blue`;
const textColor = cssLiteral `black`;
const fontSize = cssLiteral

function ModalStyles() {
    return css`
        .ap-modal {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
            display: block;
            margin: 0;
            position: absolute;
            opacity: 1;
            overflow: hidden;
            direction: ltr;
            white-space: normal;
        }

        .ap-modal-header {
            box-sizing: content-box;

        }

        .ap-modal-body {

        }

        .ap-modal-footer {

        }
    `;
}

export {ModalStyles};
