import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";

const defaultValues = {
    nameOfArt: "",
    nameOfArtist: "",
    description: "",
    genre: "",
    dimensions: 0,
    size: 0, //slider - small/medium/large OR - three input feilds for numbers 0x0x0
    color: "",
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
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item xs={12} md={4}>
                    <TextField
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name="nameOfArtwork"
                        label="Name Of Artwork"
                        fullWidth
                        autocomplete="none" />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type="text"
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
                    <TextField
                        type="number"
                        value={formValues.name}
                        onChange={handleInputChange}
                        name="Dimensions"
                        label="Dimensions"
                        fullWidth
                        autocomplete="none" />
                </Grid>

                <Grid item xs={12}>
                    <FormControl >

                        <FormLabel>Genre</FormLabel>
                        <RadioGroup
                            name="genre"
                            value={formValues.genre}
                            onChange={handleInputChange}
                            row
                            fullWidth
                        >
                            <FormControlLabel
                                key="contemporary"
                                value="male"
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
                                key="other"
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                            />

                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <div style={{ width: "80vw" }}>
                        <FormLabel> Size </FormLabel>
                        
                        <Slider
                            value={formValues.size}
                            onChange={handleSliderChange("size")}
                            defaultValue={1}
                            step={1}
                            min={1}
                            max={3}
                            marks={[
                                {
                                    value: 1,
                                    label: "small",
                                },
                                {
                                    value: 2,
                                    label: "medium",
                                },
                                {
                                    value: 3,
                                    label: "large",
                                },
                            ]}
                            valueLabelDisplay="off"
                        />
                    </div>
                </Grid>
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>

            </Grid>


        </form>
    )
}

export default SellForm;