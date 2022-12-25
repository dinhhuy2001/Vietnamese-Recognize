import { Fragment, useState, useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './Draw.css';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Draw = () => {
    const [brushRadius, setBrushRadius] = useState(5);
    const [lazyRadius, setLazyRadius] = useState(1);
    const [hideUI, setHideUI] = useState(true);
    const refCanvas = useRef();

    const clearCanvasHandle = () => {
        if (refCanvas.current) {
            refCanvas.current.clear();
        }
    };
    const undoCanvasHandle = () => {
        if (refCanvas.current) {
            refCanvas.current.undo();
        }
    };

    const hideUIHandle = () => {
        setHideUI(!hideUI);
    };

    return (
        <Fragment>
            <button
                onClick={clearCanvasHandle}
                className="btn"
                style={{
                    margin: '2rem',
                }}
            >
                Xóa
            </button>
            <button
                onClick={undoCanvasHandle}
                className="btn"
                style={{
                    marginRight: '2rem',
                }}
            >
                Hoàn tác
            </button>
            <button
                onClick={hideUIHandle}
                className="btn"
                style={{
                    marginRight: '2rem',
                }}
            >
                Công cụ
            </button>
            <button
                onClick={() =>
                    exportComponentAsJPEG(refCanvas, { fileName: 'draw' })
                }
                className="btn"
                style={{
                    marginRight: '2rem',
                }}
            >
                Xuất file ảnh
            </button>

            <label
                style={{
                    marginRight: '1rem',
                }}
            >
                Bán kính bút:
            </label>
            <input
                type="number"
                value={brushRadius}
                onChange={(e) => setBrushRadius(parseInt(e.target.value))}
            />

            <label
                style={{
                    margin: '0rem 1rem 0rem 1rem',
                }}
            >
                Độ trễ:
            </label>
            <input
                type="number"
                value={lazyRadius}
                onChange={(e) => setLazyRadius(parseInt(e.target.value))}
            />

            <div className="canvas">
                <CanvasDraw
                    hideInterface={hideUI}
                    lazyRadius={lazyRadius}
                    brushRadius={brushRadius}
                    hideGrid
                    canvasWidth={1480}
                    canvasHeight={500}
                    ref={refCanvas}
                    brushColor="black"
                />
            </div>
        </Fragment>
    );
};

export default Draw;
