import React from "react";
import Navbar from "./Navbar/Navbar";
import video from "../../video/writing.mp4";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar />
            <header id='trangchu'>
                <Navbar />
                <div class='banner'>
                    <div class='container'>
                        <video
                            controls={false}
                            muted={true}
                            autoPlay={true}
                            loop={true}
                            class='video-container'
                        >
                            <source src={video} type='video/mp4' />
                        </video>
                        <h1>Nhận dạng chữ viết tiếng Việt</h1>
                        <p style={{ fontSize: "18px" }}>
                            Công cụ chuyển đổi hình ảnh thành định dạng đầu ra
                            .txt
                        </p>
                        <a href='#trangchu' class='scroll-link btn btn-white'>
                            Tìm hiểu thêm
                        </a>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
