module.exports = {
    Logo: {
        logo: {
            color: "#ffa53e",
            border: "none"
        }
    },

    StyleGuide: {
        sidebar: {
            backgroundColor: "#f1f0f0",
            border: "none"
        },
        logo: {
            border: "none!important"
        }
    },
    ComponentsList: {
        item: {
            "& a": {
                color: "rgba(0, 0, 0, 0.55)!important",
                textDecoration: "none!important",
                letterSpacing: ".2px!important",
                cursor: "pointer!important",
                "&:hover": {
                    color: "rgba(239, 110, 0, 0.77)!important"
                }
            }
        },
        heading: {
            fontWeight: "600 !important",
            color: "#fff !important"
        }
    },

    TableOfContents: {
        input: {
            display: "block",
            width: "100%",
            padding: "8px",
            color: "rgba(122, 122, 66, 1)",
            backgroundColor: "#fff0",
            border: "none",
            borderRadius: "0",
            outline: "none",
            borderBottom: "1px solid #00436f",
            "&::placeholder": {
                color: "rgba(122, 122, 66, 1)",
                fontWeight: "lighter"
            }
        }
    }
}
