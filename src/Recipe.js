import React from 'react'
import style from './recipe.module.css'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight:400
   
  },
  img:{
    maxHeight:150
  },
  font:{
   fontSize:12
  }
});

const Recipe = ({title,image,ingredients}) =>{

  const classes = useStyles();
   
    return(

        <div style={{ marginTop: 20, padding: 20 }}>
        <Grid container spacing={40} justify="center">
          
            <Grid item key={title}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia className={classes.img}
                    component="img"
                    alt="Contemplative Reptile"
                    
                    
                    image={image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    
                    <Typography className={classes.font} variant="subtitle2" color="textSecondary"> <ol>{ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                      ))

                    }</ol></Typography>
                    
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        
        </Grid>
      </div>
    );
  }
  








     /**    <div className={style.recipe}>
         <br></br>
         <img src ={image} alt=""></img>
         <h1 >{title}</h1>
         <ol>
         {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))
        }
         </ol>

         </div> */
    

export default Recipe;