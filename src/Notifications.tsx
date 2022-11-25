import { Circle } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import img1 from "./assets/images/avatar-angela-gray.webp";
import img2 from "./assets/images/avatar-anna-kim.webp";
import img3 from "./assets/images/avatar-jacob-thompson.webp";
import img4 from "./assets/images/avatar-kimberly-smith.webp";
import img5 from "./assets/images/avatar-mark-webber.webp";
import img6 from "./assets/images/avatar-nathan-peterson.webp";
import img7 from "./assets/images/avatar-rizky-hasanuddin.webp";
export const Notifications = () => {
  const [countUnread, setCountUnread] = useState<number>(7);
  const [read, setRead] = useState(
    new Map([
      ["key1", false],
      ["key2", false],
      ["key3", false],
      ["key4", false],
      ["key5", false],
      ["key6", false],
      ["key7", false],
    ])
  );

  const markAll = () => {
    var count = 0;
    var tempMap = new Map();
    setCountUnread(0)
    while (count < 8) {
      count++;
      setRead(tempMap.set(`key${count}`, true));
    }
  };

  const onClick = (key: string) => {
    setRead((map) => new Map(map.set(key, true)));
    countUnread>0? setCountUnread(countUnread-1): setCountUnread(0)
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", backgroundColor: "whitesmoke" }}
      >
        <Grid
          item
          xs={3.4}
          sx={{
            backgroundColor: "whitesmoke",
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        ></Grid>
        <Grid item xs={12} sm={5} md={5} lg={5} sx={{ width: { xs: "100%" } }}>
          <Grid
            sx={{
              backgroundColor: "white",
              fontFamily: "sans-serif",
              padding: "5px",
              borderRadius: "0.2em",
              margin: "8px",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "16px",
              }}
            >
              <Grid
                sx={{
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                Notifications
                <span style={{
                  marginLeft:"3px",
                  fontSize: "13px",
                  borderRadius: "0.5em",
                  color: "white",
                  backgroundColor: "hsl(219, 85%, 26%)",
                  padding: "1px 4px 1px 4px"
                }}>{countUnread}</span>
              </Grid>
              <Grid
                sx={{
                  color: "#9e9e9e",
                  fontSize: "13px",
                  fontWeight: "400",
                  alignItems: "center",
                }}
                onClick={() => {
                  markAll();
                }}
              >
                Mark all as read
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                margin: "24px 16px 0px 16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key1") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key1")}
              >
                <Box>
                  <img src={img1} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Mark Webber{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    reacted to your recent post{" "}
                  </span>
                  <span
                    style={{ color: "hsl(219, 12%, 42%)", fontWeight: "500"}}
                  >
                    My first tournament today!
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key1") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>1m ago</div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key2") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key2")}
              >
                <Box>
                  <img src={img2} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Angela Grey{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    followed you.{" "}
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key2") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>5m ago</div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key3") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key3")}
              >
                <Box>
                  <img src={img3} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Jacob Thompson{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    has joined your group{" "}
                  </span>
                  <span
                    style={{ color: "hsl(219, 12%, 42%)", fontWeight: "500" }}
                  >
                    Chess Club
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key3") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>10m ago</div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key4") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key4")}
              >
                <Box>
                  <img src={img4} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Rizky Hasanudin{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    sent you a private message{" "}
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key4") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>1 day ago</div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key5") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key5")}
              >
                <Box>
                  <img src={img5} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Kimberly Smith{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    commented on your picture{" "}
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key5") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>5 days ago</div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key6") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key6")}
              >
                <Box>
                  <img src={img6} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Nathan Peterson{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    reacted to your recent post{" "}
                  </span>
                  <span
                    style={{ color: "hsl(219, 12%, 42%)", fontWeight: "500" }}
                  >
                    5 end-game strategies to increase your win rate
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key6") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>1 week ago</div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  marginBottom: "8px",
                  padding: "0.5em",
                  borderRadius: "0.5em",
                  backgroundColor: read.get("key7") ? "white" : "#e3f2fd",
                }}
                onClick={() => onClick("key7")}
              >
                <Box>
                  <img src={img7} width="50" height="50" />
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    padding: "2px",
                    margin: "5px",
                  }}
                >
                  <span
                    style={{ color: "hsl(224, 21%, 14%)", fontWeight: "500" }}
                  >
                    Anna Kim{" "}
                  </span>
                  <span style={{ color: "hsl(219, 14%, 63%)" }}>
                    left the group{" "}
                  </span>
                  <span
                    style={{ color: "hsl(219, 12%, 42%)", fontWeight: "500" }}
                  >
                    Chess Club
                  </span>
                  <span>
                    <Circle
                      sx={{
                        color: "red",
                        fontSize: "8px",
                        marginLeft: "2px",
                        display: read.get("key7") ? "none" : "flow",
                      }}
                    />
                  </span>
                  <br />
                  <div style={{
                    color: "#9e9e9e",
                    fontSize: "12px"
                  }}>2 weeks ago</div>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3.4}
          sx={{
            backgroundColor: "whitesmoke",
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        ></Grid>
      </Grid>
    </>
  );
};
