import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exerciseArray } from '../../../redux/excerciseApi/exerciseApiAction';
import { response, exerciseOption } from '../../../utils/utilsFetchData';
import AllItem from '../../showAll/AllItem';
import "./ExerciseDetails.scss";
import { Container,Typography, Stack, Pagination } from '@mui/material';
import LinkNav from '../../navigation/Link';


const ExerciseDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAll = async () => {
      const url = process.env.REACT_APP_ALL;
      const allData = await response(url, exerciseOption);
      console.log(exerciseOption)
      dispatch(exerciseArray(allData))
    }
    fetchAll()
  }, [])

  const All = useSelector((state) => state.exerciseApiObj);
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    document.getElementById('content-container').scrollTo({ top: 0, behavior: 'smooth' });
  };
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Container maxWidth="lg">
      <LinkNav fontcolor="true" />
      <Typography variant="h4" gutterBottom textAlign="center">
        All Exercises
      </Typography>

      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" id="content-container" justifyContent="center" className="smooth-scroll" >
        {All.slice(startIndex, endIndex).map((item, index) => (
          <AllItem key={index} item={item} />
        ))}
      </Stack>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px',marginBottom: '16px' }}>
        <Pagination
          count={Math.ceil(All.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </Container>

  );
}

export default ExerciseDetails