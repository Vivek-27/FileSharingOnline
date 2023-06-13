import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { uploadFile } from './api';
import { FaShare } from 'react-icons/fa';
import { TbSearch } from 'react-icons/tb';
import { CgLaptop, CgProfile } from 'react-icons/cg';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { RxShare2 } from 'react-icons/rx';
import { MdContentCopy } from 'react-icons/md';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import panal_ico from './icons/images.png';
import folder from './icons/Folder.png';
import VideoFolder from './icons/VideoFolder.png';
import musicFolder from './icons/musicFolder.png';
const App = () => {
  const fileSelectRef = useRef();
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [icon, setIcon] = useState(folder);
  const [btn, setBtn] = useState('');
  const [text, setText] = useState('Select your file');

  const onUploadClick = () => {
    fileSelectRef.current.click();
  };

  const upload = async (file) => {
    if (file) {
      const data = new FormData();
      data.append('file', file);
      data.append('name', file.name);
      let response = await uploadFile(data);
      setResult(response.path);
      setBtn('share');
    }
  };

  const copyFn = async () => {
    await navigator.clipboard.writeText(result);
    alert('Copied the link: ' + result);
  };

  useEffect(() => {
    if (file) {
      setText(file.name);
    }
    if (file.type === 'image/png') {
      setIcon(URL.createObjectURL(file));
    } else if (file.type === 'image/jpeg') {
      setIcon(URL.createObjectURL(file));
    } else if (file.type === 'image/jpg') {
      setIcon(URL.createObjectURL(file));
    } else if (file === 'image/jpg') {
      setIcon(URL.createObjectURL(file));
    } else if (file.type === 'video/mp4') {
      setIcon(VideoFolder);
    } else if (file.type === 'video/mkv') {
      setIcon(VideoFolder);
    } else if (file.type === 'audio/mpeg') {
      setIcon(musicFolder);
    } else {
      setIcon(folder);
    }
  }, [file]);
  return (
    <div className="container">
      <div className="wrapper">
        <nav className="navbar">
          <div className="nav_icon">
            <div className="btn cut"></div>
            <div className="btn min"></div>
            <div className="btn max"></div>
          </div>
          <div className="search">
            <p>
              <TbSearch className="tb" /> Search
            </p>
          </div>
          <div className="search_list"></div>
          <div className="search_list_"></div>
          <div className="search_list3"></div>
          <div className="search_list2"></div>
          <div className="search_list3"></div>
          <div className="search_list5"></div>
          <div className="search_list4"></div>
          <div className="search_end"></div>
        </nav>
        <div className="nav_right">
          <div className="top_nav">
            <div className="nav_lr">
              <img className="panal_ico" src={panal_ico} />
              <BsChevronLeft />
              <BsChevronRight />
            </div>
            <div className="top_nav_right">
              <CgProfile className="cg" />
              <p>File Shar...</p>
              <FiChevronDown className="fi" />
              <IoMdHelpCircleOutline className="io" />
            </div>
          </div>
          <hr></hr>
          <div className="hero">
            <h1>File Share!</h1>
            <p>Upload and Share the download link</p>

            <input
              type="file"
              ref={fileSelectRef}
              style={{ display: 'none' }}
              onChange={(e) => {
                setFile(e.target.files[0]);
                setBtn('upload');
              }}
            />
            <div
              className="file"
              onClick={() => {
                onUploadClick();
                // setBtn('upload');
              }}
            >
              <img src={icon} alt="file" />
            </div>
            <sup>{text}</sup>
            <div className="share_container">
              {btn === 'upload' ? (
                <>
                  <p>Click here to Share your file</p>
                  <RxShare2 className="rx" onClick={() => upload(file)} />
                </>
              ) : (
                ''
              )}
              {btn === 'share' ? (
                <>
                  <MdContentCopy className="rx" onClick={() => copyFn()} />
                  <a href={result} if="myInput">
                    {result}
                  </a>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="footer">
            <p>Copied file link: {result}</p>
            <div className="new_file">
              {file ? (
                <button
                  className="btnNew"
                  onClick={() => window.location.reload()}
                >
                  New
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
