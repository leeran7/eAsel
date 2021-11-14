import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { createTheme } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';



const defaultValues = {
    nameOfArt: "",
    nameOfArtist: "",
    description: "",
    dimensions: 0,
    genre: "",
    price: 0,
    photos: null,
};


const SellForm = () => {

    const [formValues, setFormValues] = useState(defaultValues);

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
        console.log(formValues);//make popup window ????
    };

    return (
        <form onSubmit={handleSubmit}>

            <Grid container justify="center" direction="column" spacing={3}>

                <Grid item>
                    <Typography variant="h5">Tell us a bit about your artwork...</Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="text"
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name="nameOfArtwork"
                        label="Name Of Artwork"
                        fullWidth
                        autocomplete="none" />
                </Grid>

                <Grid item xs={9}>
                    <TextField
                        type="text"
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name="nameOfArtist"
                        label="Name Of Artist"
                        fullWidth
                        autocomplete="none" />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="text"
                        variant="outlined"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name="nameOfArtwork"
                        label="Description i.e. color, style"
                        fullWidth
                        multiline
                        rows={4}
                        autocomplete="none" />
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
                                name="Dimensions"
                                autocomplete="none" />

                        </Grid>
                        <FormLabel>x</FormLabel>
                        <Grid item xs={3}>
                            <TextField
                                type="number"
                                variant="outlined"
                                value={formValues.name}
                                onChange={handleInputChange}
                                name="Dimensions"
                                // label="dimension"
                                autocomplete="none" />
                        </Grid>
                        <FormLabel>x</FormLabel>
                        <Grid item xs={3}>
                            <TextField
                                type="number"
                                variant="outlined"
                                value={formValues.name}
                                onChange={handleInputChange}
                                name="Dimensions"
                                autocomplete="none" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FormControl  >
                        <FormLabel>Genre</FormLabel>
                        <RadioGroup
                            name="genre"
                            value={formValues.genre}
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
                    <Button variant="contained" color="primary" component="label">
                        <input type="file" hidden />
                        <IconButton>
                            <CameraAltOutlinedIcon fontSize="large" style={{ fill: "white" }} />
                        </IconButton>
                        {/* not updating any state... is it necessary? */}
                        Upload Photos
                    </Button>
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