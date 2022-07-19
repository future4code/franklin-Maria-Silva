import React from "react";
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {RecipeCardContainer, RecipeCardContent} from './styled';

const RecipeCard = (props) => {

    return (
        <RecipeCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.title}
                    height="150px"
                    image={props.image}
                    title={props.title}
                />
                <RecipeCardContent>
                    <Typography align="center">
                        {props.title}
                    </Typography>
                </RecipeCardContent>
            </CardActionArea>
        </RecipeCardContainer>
    )
}

export default RecipeCard