import React from 'react'
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const step=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
function OrderTracking({activeStep}) {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {step.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{ color: "#9155FD", fontSize: "44px" }}
              className={``}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
} 

export default OrderTracking
