import React, { useState } from "react";
import Result from "../../result/result.txt";
import "./Feature.css";
import axios from "axios";

const Feature = () => {
    const [previewImage, setPreviewImage] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePrediction, setImagePrediction] = useState("");

    const generatePreviewImage = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (e) => callback(reader.result);
    };

    const handleChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        setImageFile(file);
        generatePreviewImage(file, (previewImageUrl) => {
            setPreviewImage(previewImageUrl);
            setImagePrediction("");
        });
    };

    const uploadTransformerHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", imageFile, "img_transformer.png");

        let t0 = performance.now();
        axios
            .post(
                " https://5156-2402-800-6294-555-bd7d-cb89-6b4e-edb.ap.ngrok.io/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    headers: new Headers({
                        "ngrok-skip-browser-warning": "69420",
                    }),
                    mode: "no-cors",
                }
            )
            .then((res, data) => {
                data = res.data;
                setImagePrediction(data);
                let t1 = performance.now();
                console.log(data);
                console.log(
                    "The time Transformer model took to predict the image " +
                        (t1 - t0) +
                        " milliseconds."
                );
            });
    };

    return (
        <div className='container--feature'>
            <div className='container--feature__col'>
                <p>TẢI TỆP LÊN ĐỂ NHẬN DẠNG CHỮ </p>
                {/* Button for choosing an image */}
                <div>
                    <input
                        type='file'
                        name='file'
                        onChange={handleChange}
                        className='btn'
                    />
                </div>

                {/* Button for sending image to backend */}
                <div style={{ margin: "1rem" }}>
                    <input
                        type='submit'
                        onClick={uploadTransformerHandler}
                        className='btn'
                        value='Nhận dạng'
                    />
                </div>

                <div className='container--image'>
                    {previewImage && (
                        <img
                            alt='inputimg'
                            src={previewImage}
                            className='previewImage'
                        />
                    )}
                </div>
            </div>
            {/* Text for model prediction */}
            <div className='container--feature__col'>
                {imagePrediction && (
                        <h4>Kết quả dự đoán: {imagePrediction}</h4>
                    ) && (
                        <a href={Result} download='result.txt' className='btn'>
                            Tải xuống
                        </a>
                    )}
            </div>
            <div className='final'>
                {imagePrediction && (
                    <h3>
                        Kết quả dự đoán: <br /> <h5>"{imagePrediction}"</h5>
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Feature;
