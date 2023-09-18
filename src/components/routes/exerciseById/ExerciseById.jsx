import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { response, exerciseOption } from '../../../utils/utilsFetchData';
import { Stack, Typography, Container } from '@mui/material';
import "./ExerciseById.scss";
import bodypart from "../../../assets/body-part.png";
import equipment from "../../../assets/equipment.png";
import target from "../../../assets/target.png";
import LinkNav from '../../navigation/Link';
import ExcerciseByVideo from '../../exerciseByVideo/ExcerciseByVideo';

const ExerciseById = () => {
    const [specificObj, setSpecificObj] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchSpecificData = async () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
            const getData = await response(url, exerciseOption);
            setSpecificObj(getData);
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        fetchSpecificData()
    }, [id])

    const extra = [
        {
            icon: bodypart,
            name: specificObj.bodyPart
        },
        {
            icon: equipment,
            name: specificObj.equipment
        },
        {
            icon: target,
            name: specificObj.target
        }
    ]
    return (
        <Container maxWidth="lg">
            <LinkNav fontcolor="true" />
            <Stack direction={{ md: "row", sm: "column" }} spacing={2} style={{ backgroundColor: "#fff", height: 'max-content', borderRadius: "8px" }} className="specificBox" sx={{ p: 3 }} >
                <Stack sx={{ width: { xs: '200px', md: '600px' } }} className="imgBox" >
                    <img src={specificObj.gifUrl} alt='' />
                </Stack>
                <Stack sx={{ p: { xs: 0 } }}>
                    <Typography variant="h4" className='specificName' >{specificObj.name}</Typography>
                    <Typography variant="body1" style={{ marginTop: "20px" }}>
                        {`This Exercise keeps you strong. ${specificObj.name} is one of the best
                        exercises to target your ${specificObj.target}. Basically it's related to your ${specificObj.bodyPart}. It will help you improve your
                        mood and gain energy.`}
                    </Typography>
                    <Stack direction={{sm:"row",xs:"column"}} sx={{ mt: 3 }}>
                        {extra.map((item, id) => {
                            return (
                                <div className="extra-box" key={id}>
                                    <img src={item.icon} alt='' style={{ marginBottom: '5 px' }} />
                                    <Typography textAlign="center" variant="overline">{item.name}</Typography>
                                </div>
                            )
                        })}
                    </Stack>
                </Stack>
            </Stack>
            <ExcerciseByVideo id={id} name={specificObj.name} target={specificObj.target} equipment={specificObj.equipment} />
        </Container>
    )
}

export default ExerciseById