import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
// import LanguageIcon from "@mui/icons-material/Language";
// import color from "../styles/colors";
import { useContext } from "react";
// import { globalState } from "../App";
import { useMediaQuery } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Slide } from "@mui/material";
import { MdTranslate } from "react-icons/md";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
const options = ["en", "hn"];

const theme = createTheme({
    palette: {
        primary: { main: "#000000" },
        secondary: { main: "#000000" },
    },
    typography: {
        fontFamily: `"Montserrat", Arial, Helvetica, sans-serif`,

        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 800,
    },
});

function Language_dialogue_Box(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);
    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
        console.log(e);
       
        i18n.changeLanguage(e);
        localStorage.setItem("Lang")
        // console.log(languageValue);
    };

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
        localStorage.setItem("lang", value);
        changeLanguageHandler(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Dialog
            sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
            maxWidth="xs"
            TransitionComponent={Transition}
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>Select your language</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio />}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

Language_dialogue_Box.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

export default function ConfirmationDialog() {
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("English");

    const handleClickListItem = (lang) => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };
    //   const { mode } = useContext(globalState);

    return (
        <Box sx={{ width: "100%", maxWidth: 360, backgroundColor: "transparent" }}>
            <IconButton onClick={handleClickListItem}>
                <  MdTranslate



                    style={{
                        height: "50px",
                        color: "#0EA220"

                    }}
                />
                {!isMatch && (
                    <>
                        <Typography
                            sx={{
                                fontSize: "1.2rem",
                                color: "#0EA220"

                            }}
                        >
                            {localStorage.getItem("lang")}
                        </Typography>
                    </>
                )}
            </IconButton>

            <Language_dialogue_Box
                keepMounted
                open={open}
                onClose={handleClose}
                value={value}
            />
        </Box>
    );
}
