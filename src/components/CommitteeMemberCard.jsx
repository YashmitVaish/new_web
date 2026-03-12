import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CardContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'forceTwoPerRow',
})(({ theme, forceTwoPerRow }) => ({
  display: 'flex',
  minWidth: 0,

  alignItems: 'center',
  width: forceTwoPerRow ? 'calc(50% - 20px)' : 'calc(33.33% - 20px)',
  boxSizing: 'border-box',
  position: 'relative',
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    width: 'calc(50% - 20px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));


const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '15vmin',
  height: '15vmin',
  borderRadius: '20%',
  backgroundColor: '#eaeaea',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  zIndex: 2,
  flexShrink: 0,
  marginRight: '-20px',
  [theme.breakpoints.down('md')]: {
    width: '25vmin',
    height: '25vmin',
  },
  [theme.breakpoints.down('sm')]: {
    width: '30vmin',
    height: '30vmin',
  }
}));

const MemberImage = styled('img')({
  width: '80%',
  height: '80%',
  objectFit: 'cover',
  borderRadius: '20%'
});

const InfoWrapper = styled(Box)({
  backgroundColor: '#f9f9f9',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  padding: '15px 20px 15px 35px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
  zIndex: 1,
  flexGrow: 1,
  flexShrink: 1,
  textAlign: 'right',
  marginLeft: '-50px',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  overflowWrap: 'anywhere',
  minWidth: 0,
});

// const MembersContainer = styled(Box)({
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: '30px',
//   justifyContent: 'flex-start',
// });


const CommitteeMemberCard = ({ member, forceTwoPerRow }) => {
  return (
    <CardContainer forceTwoPerRow={forceTwoPerRow}>
      <ImageWrapper>
        <MemberImage src={member.image} alt={member.name} />
      </ImageWrapper>
      <InfoWrapper>
        <Typography variant="body1" component="p" >
          <strong>
            {member.name}
            <br />
            {member.title},<br /> {member.department}
          </strong>
        </Typography>
      </InfoWrapper>
    </CardContainer>
  );
};


export default CommitteeMemberCard; 