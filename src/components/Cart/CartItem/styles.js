import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  root:{
    display:"flex", 
    marginBottom:"20px",
    justifyContent:"space-between"
  },
  media: {
    height: "20px"
    
  },
  cardContent: {

    justifyContent: 'space-between',
  },
  cardTitle:{
    fontSize:"20px",
  },
  cardPrice:{
    fontSize:"16px",
    fontStyle:"italic"
  },
  CardAction: {
    display:"flex"
  },
  buttons: {
    display:"flex",
    alignItems: 'center',
  },
}));