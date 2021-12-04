import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

const defaultValues = {
    error: false,
    success: false,
    title: "",
    nameOfArtist: "",
    description: "",
    dimensionX: 0,
    dimensionY: 0,
    dimensionZ: 0,
    genre: "",
    price: undefined,
    uri: "",
    redirect: false,
};

const SellForm = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleUriChange = (value) =>{

        setFormValues({
            ...formValues,
            uri: value,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("/api/artworks/new", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
            // body: JSON.stringify({ content: formValues.json }),
        })
            .then(res => {
                // console.log(res);
                if (res.ok) {
                    return res.json();
                }
                // throw new Error('Content validation');
            })
            .then(() => {
                setFormValues({
                    success: true,
                    redirect: true
                });
                
            })
            .catch(err => {
                setFormValues({
                    error: true,
                    //replace all the data values with nothing? 
                });
                console.error('Error:', err)
            });
        // console.log(formValues);//make popup window to say successfully saved the data to db?
        
    };
    if(formValues.redirect){
        return <Redirect to="/"/>
    }
    return (
        <form onSubmit={handleSubmit}>

            <Grid container justifyContent="center" direction="column" spacing={3}>

                <Grid item>
                    <Typography variant="h5">Tell us a bit about your artwork...</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="text"
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name= "title"
                        label="Name Of Artwork"
                        fullWidth
                        autoComplete="none" />
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        type="text"
                        variant="outlined"
                        value={formValues.name} //get name from db and input
                        onChange={handleInputChange}
                        name="nameOfArtist"
                        label="Name Of Artist"
                        fullWidth
                        autoComplete="none" />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="text"
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name="description"
                        label="Description i.e. color, style"
                        fullWidth
                        multiline
                        rows={4}
                        autoComplete="none" />
                </Grid>

                <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1} direction="row">
                        <Grid item xs={12}>
                            <FormLabel>Dimensions (in.)</FormLabel>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                type="number"
                                variant="outlined"
                                value={formValues.name}
                                onChange={handleInputChange}
                                name="dimensionX"
                                autoComplete="none" />

                        </Grid>
                        <FormLabel>x</FormLabel>
                        <Grid item xs={3}>
                            <TextField
                                type="number"
                                variant="outlined"
                                value={formValues.name}
                                onChange={handleInputChange}
                                name="dimensionY"
                                // label="dimension"
                                autoComplete="none" />
                        </Grid>
                        <FormLabel>x</FormLabel>
                        <Grid item xs={3}>
                            <TextField
                                type="number"
                                variant="outlined"
                                value={formValues.name}
                                onChange={handleInputChange}
                                name="dimensionZ"
                                autoComplete="none" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormControl  >
                        <FormLabel>Genre</FormLabel>
                        <RadioGroup
                            name="genre"
                            value={formValues.name}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                key="contemporary"
                                value="contemporary"
                                control={<Radio size="small" />}
                                label="Contemporary"
                            />
                            <FormControlLabel
                                key="antique"
                                value="antique"
                                control={<Radio size="small" />}
                                label="Antique"
                            />
                            <FormControlLabel
                                key="pop-art"
                                value="pop"
                                control={<Radio size="small" />}
                                label="Pop-Art"
                            />
                            <FormControlLabel
                                key="abstract"
                                value="abstract"
                                control={<Radio size="small" />}
                                label="Abstract"
                            />
                            <FormControlLabel
                                key="other"
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                            // make text box for this option - so user can fill in themselves
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <div style={{ width: "80vw" }}>
                        <Typography>
                            <FormLabel> Price: </FormLabel> ${formValues.price}
                        </Typography>
                        <Slider
                            value={formValues.price}
                            onChange={handleSliderChange("price")}
                            defaultValue={10}
                            valueLabelDisplay="auto"
                            step={10}
                            min={10}
                            max={6000}
                            marks={[
                                {
                                    value: 1,
                                    label: "$10",
                                },
                                {
                                    value: 3000,
                                    label: "$3,000",
                                },
                                {
                                    value: 6000,
                                    label: "$6,000",
                                },
                            ]}
                        />
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1} direction="row"> 
                            <Grid item={3}>
                              <CloudinaryUploadWidget changeUri={handleUriChange}/>
                            </Grid>
                    
                    </Grid>
                </Grid>

                <Grid item>
                    <Button variant="contained" color="secondary" type="submit" fontSize="large">
                        submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SellForm;