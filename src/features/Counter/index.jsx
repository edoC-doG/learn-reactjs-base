import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { descrease, increase } from './counterSilce';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function CounterFeature(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleIncreaseClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDescreaseClick = () => {
    dispatch(descrease());
  };
  return (
    <>
      <div className={styles.couter}>CounterFeature</div>
      <p>{count}</p>
      <div>
        <Button className={classes.root} onClick={handleIncreaseClick}>
          Increase
        </Button>
      </div>
      <div>
        <Button className={classes.root} onClick={handleDescreaseClick}>
          Decrease
        </Button>
      </div>
    </>
  );
}

CounterFeature.propTypes = {};

export default CounterFeature;
