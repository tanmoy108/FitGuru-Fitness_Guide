import React from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

const VideoCard = ({ video }) => {
  return (
    <>
      {video.filter((item, id) => (
        id < 3
      )).map((videoItem, id) => {
        // console.log(videoItem.video.thumbnails[0].url);
        return (
          <Card key={id} variant="outlined" sx={{ width: 320, mt: 5, mx: 2 }}>
            <CardOverflow>
              <AspectRatio ratio="2">
                <img
                  src={videoItem.video.thumbnails[0].url}
                  srcSet={videoItem.video.thumbnails[0].url}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md">{videoItem.video.title && videoItem.video.title}</Typography>
              <Typography level="body-sm">{videoItem.video.channelName && videoItem.video.channelName}</Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
              <Divider inset="context" />
              <CardContent orientation="horizontal">
                <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                  {videoItem.video.viewCountText}
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                  {videoItem.video.publishedTimeText}
                </Typography>
                <Divider orientation="vertical" />
                <Button
                  component="a"
                  href={`https://www.youtube.com/watch?v=${videoItem.video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{width:'100px',backgroundColor:"#CD201F"}}
                >
                  Play
                </Button>
              </CardContent>
            </CardOverflow>
          </Card>
        )
      })}
    </>
  )
}

export default VideoCard