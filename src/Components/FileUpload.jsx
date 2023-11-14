import PropTypes from 'prop-types';

import { useState } from "react";

const Fileupload = ({ onFileSelect, classType }) => {

    const [selectedFile, setSelectedFile] = useState('');
    const handleFilechange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        onFileSelect(file)
    }

    return (
        <>
            <input type="file" onChange={(e) => handleFilechange(e)} className={classType}/>
        </>
    )
}

Fileupload.propTypes = {
    onFileSelect: PropTypes.func,
}

export default Fileupload;