import React, { useState } from 'react';
import { addFine } from '../methods/fines';
import { Alert } from '@material-ui/lab/';
import { Collapse, IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    root: '',
}))

const AddFine = ({ fines, setFines }) => {
    const [fine, setFine] = useState({});
    const [showAlert, setShowAlert] = useState(false);

	const handleInputChange = e => {
		e.persist();
		setFine(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = e => {
		e.preventDefault();
		addFine(fine).then(ref => {
            setFines(prev => [...prev, {
                id: ref.id,
                amount: fine.amount,
                user: fine.user,
                desc: fine.desc
            }])
            setFine({})
            setShowAlert(true)
        });
    };

    const classes = useStyles()
    
	return (
        <div className={classes.root}>
        {showAlert &&
        <Collapse in={showAlert}>
            <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
        </Collapse>
        }
		<form onSubmit={handleSubmit}>
            <input type='hidden' value="userid" />
			<input
				onChange={handleInputChange}
				type='number'
				name='amount'
                placeholder='100'
                value={fine.amount}
			/>
			<input
				onChange={handleInputChange}
				type='text'
				name='desc'
                placeholder='Description of fine'
                value={fine.desc}
			/>
			<button type='submit'>Submit</button>
		</form>
        </div>
	);
};

export default AddFine;
