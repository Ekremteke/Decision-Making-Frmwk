import React from "react";
import Pdf from "../pdf-generation/Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Results = () => {
	

	const defineGoalText = sessionStorage.getItem("defineGoalText");
	const users = JSON.parse(sessionStorage.getItem("users"));
	const selectedOption = sessionStorage.getItem("selectedOption");
  	const selectedOptionCapacity = sessionStorage.getItem("selectedOptionCapacity");
	const selectedOptionDecision = sessionStorage.getItem("selectedOptionDecision");
	const selectedOptionTypeOfInformation = sessionStorage.getItem("selectedOptionTypeOfInformation");
	const selectedOptionAmountOfInformation = sessionStorage.getItem("selectedOptionAmountOfInformation");
	const explicitVotingMethod = sessionStorage.getItem("explicitVotingMethod");
	const relativeVotingMethod1 = sessionStorage.getItem("relativeVotingMethod1");
	const relativeVotingMethod2 = sessionStorage.getItem("relativeVotingMethod2");
	const textAdvice = sessionStorage.getItem("textAdvice");
	return (
		<div className="container">
			<h1>You have completed the tool. Please check your responses below.</h1>
			<p>
				(Info)You can click on individual steps in the progress bar to go back
				and change any of the responses.
			</p>
			<div className="border-decision-framework-pages">
				<table>
					<tbody>
						<tr className="table-background">
							<th>Voting Method</th>
							{selectedOptionTypeOfInformation === "explicit" ? (
								<th>{explicitVotingMethod}</th>
							) : (
								<th>{relativeVotingMethod1 + " " + relativeVotingMethod2}</th>
							)}
						</tr>
						<tr>
							<td>What</td>
							<td>{defineGoalText}</td>
						</tr>
						<tr>
							<td>Who</td>
							{users.map((user, index) => (
								<td key={index}>{user.name}</td>
							))}
						</tr>
						<tr>
							<td>Importance</td>
							<td>{selectedOption}</td>
						</tr>
						<tr>
							<td>Capacity</td>
							<td>{selectedOptionCapacity}</td>
						</tr>
						<tr>
							<td>Time and Resource</td>
							<td>{textAdvice}</td>
						</tr>
						<tr>
							<td>Type of Decision </td>
							<td>{selectedOptionDecision}</td>
						</tr>
						<tr>
							<td>Type of Information</td>
							<td>{selectedOptionTypeOfInformation}</td>
						</tr>
						<tr>
							<td>Amount of Information </td>
							<td>{selectedOptionAmountOfInformation}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="start-btn">
				<PDFDownloadLink
					className="inner"
					document={
						<Pdf
							selectedOptionAmountOfInformation={
								selectedOptionAmountOfInformation
							}
							selectedOptionTypeOfInformation={selectedOptionTypeOfInformation}
							selectedOptionDecision={selectedOptionDecision}
							selectedOptionCapacity={selectedOptionCapacity}
							selectedOption={selectedOption}
							defineGoalText={defineGoalText}
							users={users}
						/>
					}
					fileName="decision.pdf"
				>
					{({ loading }) =>
						loading ? (
							<button>Loading document... </button>
						) : (
							<button> Download as a PDF!</button>
						)
					}
				</PDFDownloadLink>
			</div>
		</div>
	);
};
export default Results;