import React, { useState } from "react";
import { useStyles } from "./styles";
import { Typography, createMuiTheme } from "@material-ui/core";
import ButtonFilled from "../../components/ButtonFilled/index";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckIcon from "@material-ui/icons/Check";
import ToggleComponent from "../ToggleComponent";
import LinearProgressBar from "../LinearProgressBar";

function createData(
	name: string,
	result: JSX.Element,
	weight: number | number[],
	points: number
) {
	return { name, result, weight, points };
}
const result = 9;
const result1 = 6;
const result2 = 3;
const result3 = 2;

interface customModalProps {
	isOpen: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	testValue: (number | number[])[];
}

export default function CustomResultModal(props: customModalProps) {
	const classes = useStyles();
	const { isOpen, testValue } = props;

	const rows = [
		createData(
			"Node add test",
			<div>
				<ToggleComponent />
			</div>,
			testValue[0],
			result
		),
		createData(
			"Config map multi volume test",
			<div>
				<ToggleComponent />
			</div>,
			testValue[1],
			result1
		),
		createData(
			"Networking pod test",
			<div>
				<ToggleComponent />
			</div>,
			testValue[2],
			result2
		),
		createData(
			"Proxy-service-test",
			<div>
				<ToggleComponent />
			</div>,
			testValue[3],
			result3
		),
	];

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={true}
				onClose={isOpen}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={true}>
					<div className={classes.paper}>
						<div className={classes.tableHeader}>
							<Typography className={classes.headingModal}>
								<strong>
									Simulate the workflow run and see the
									suggested reliability score
								</strong>
							</Typography>
							<Typography className={classes.headingModal}>
								<strong>
									(worflow1 (K8S conformance test on Ignite
									cluster)
								</strong>
							</Typography>
						</div>
						<TableContainer>
							<Table
								className={classes.table}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell
											className={classes.tableHeading}
										>
											Test Name
										</TableCell>
										<TableCell
											align="center"
											className={classes.tableHeading}
										>
											Test Result
										</TableCell>
										<TableCell
											align="center"
											className={classes.tableHeading}
										>
											Weight of test
										</TableCell>
										<TableCell
											align="center"
											className={classes.tableHeading}
										>
											Test Points
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.name}>
											<TableCell
												component="th"
												scope="row"
												className={classes.tableData}
											>
												{row.name}
											</TableCell>
											<TableCell
												align="center"
												className={classes.testResult}
											>
												{row.result}
											</TableCell>
											<TableCell
												align="center"
												className={classes.tableWeight}
											>
												{row.weight}
												&nbsp; points
												<br />
												<LinearProgressBar
													value={row.weight}
												/>
											</TableCell>
											<TableCell
												align="center"
												className={classes.tablePoints}
											>
												{row.points}
												&nbsp; points
												<br />
												<LinearProgressBar
													value={row.points}
												/>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								marginTop: 40,
							}}
						>
							<div className={classes.resultDiv}>
								<Typography className={classes.resultText}>
									Total Score
								</Typography>
								<Typography className={classes.totalScore}>
									<strong>4/32</strong>
								</Typography>
							</div>
							<div className={classes.resultDiv}>
								<Typography className={classes.resultText}>
									Reliability score
								</Typography>
								<Typography
									className={classes.reliabilityScore}
								>
									<strong>70%</strong>
								</Typography>
							</div>
							<div className={classes.resultDiv}>
								<Typography className={classes.resultTextInfo}>
									Tips from Litmus Portal:
								</Typography>
								<Typography className={classes.testTips}>
									{" "}
									When you set the test result, then pay
									attention to the total values of the total
									score. This will help you in setting up your
									tests, getting the maximum result and the
									correct operation of the test in the future.
								</Typography>
							</div>
						</div>
						<div className={classes.buttonDiv}>
							<ButtonFilled
								handleClick={() => {
									console.log("Got it");
								}}
								value={"Got it"}
								data-cy="nextButton"
							/>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}