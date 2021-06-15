import React from "react";
// import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState from "material-ui-popup-state";
import { useSelector } from "react-redux";

const Ads = () => {
    const [op, setOp] = React.useState(false);

    const { dataListLoadingSix } = useSelector((state) => state.dataList);

    const handleClose = () => {
        setOp(false);
    };

    React.useEffect(() => {
        const ad = setTimeout(() => {
            setOp(true);
        }, 5000);
        return () => clearTimeout(ad);
    }, []);

    return (
        !dataListLoadingSix && (
            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                    <div>
                        <Popover
                            // {...bindPopover(popupState)}
                            open={op}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "top",
                            }}
                        >
                            <Box p={2}>
                                <div
                                    style={{
                                        cursor: "pointer",
                                        width: "5%",
                                        textAlign: "center",
                                        marginLeft: "95%",
                                    }}
                                    onClick={() => handleClose()}
                                >
                                    x
                                </div>
                                <img
                                    src="https://afiles.webengage.com/webengage/~47b6642d/webengage_3621_1622745363269.jpg"
                                    alt="ad"
                                />
                            </Box>
                        </Popover>
                    </div>
                )}
            </PopupState>
        )
    );
};

export { Ads };
