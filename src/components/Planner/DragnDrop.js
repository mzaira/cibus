import React, { useState, useRef, useEffect } from 'react'

//@MATERIAL-UI: import components
import { Container, Grid, Card, CardMedia, Typography } from '@material-ui/core'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

function DragNDrop({ data }) {
    
    //CONST: for stylings
    const classes = useStyles()

    //CONST: usage of useState
    const [list, setList] = useState(data);
    const [dragging, setDragging] = useState(false);

    //useEffect: for data to load up immediately
    useEffect(() => {
        setList(data);
    }, [setList, data])

    //CONST: to set the initial values
    const dragItem = useRef();
    const dragItemNode = useRef();

    //CONST: for dragging
    const handletDragStart = (e, item) => {
        console.log('Starting to drag', item)

        dragItemNode.current = e.target;
        dragItemNode.current.addEventListener('dragend', handleDragEnd)
        dragItem.current = item;

        setTimeout(() => {
            setDragging(true);
        }, 0)
    }

    //CONST: to set the new order of lists
    const handleDragEnter = (e, targetItem) => {
        console.log('Entering a drag target', targetItem)
        if (dragItemNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item')

            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList))
                newList[targetItem.grpI].items.splice(targetItem.itemI, 0, newList[dragItem.current.grpI].items.splice(dragItem.current.itemI, 1)[0])
                dragItem.current = targetItem;
                localStorage.setItem('List', JSON.stringify(newList));
                return newList
            })
        }
    }

    //CONST: end of dragging
    const handleDragEnd = (e) => {
        setDragging(false);
        dragItem.current = null;
        dragItemNode.current.removeEventListener('dragend', handleDragEnd)
        dragItemNode.current = null;
    }

    if (list) {
        return (
            <Container maxWidth="lg" className={classes.dropContainer}>
                <Grid container spacing={3}>
                    <div className={classes.list}>
                        <div style={{ width: "80px" }}></div>
                        <Typography className={classes.listText} variant="h6">Breakfast</Typography>
                        <Typography className={classes.listText} variant="h6">Lunch</Typography>
                        <Typography className={classes.listText} variant="h6">Snack</Typography>
                        <Typography className={classes.listText} variant="h6">Dinner</Typography>
                    </div>
                    {list.map((grp, grpI) => (
                        <Grid container spacing={3} key={grp.title} onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, { grpI, itemI: 0 }) : null} className={classes.dragGroup}>
                            <Typography className={classes.text} variant="h5">{grp.title}</Typography>
                            {grp.items.map((item, itemI) => (
                                <Card className={classes.item} elevation={3} draggable key={item} onDragStart={(e) => handletDragStart(e, { grpI, itemI })} onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null} >
                                    <CardMedia className={classes.media} image={item.image} title={item.label} />
                                    <Typography className={classes.cardText} variant='body1' gutterBottom>{item.label}</Typography>
                                </Card>
                            ))}
                        </Grid>
                    ))}


                </Grid>
            </Container>
        )
    } else { return null }

}

export default DragNDrop;