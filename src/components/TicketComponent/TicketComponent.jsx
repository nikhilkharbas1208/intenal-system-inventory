import styles from "./Ticket.module.css";

export default function TicketComponent() {
  return (
    <div>
      <form className={styles.formContainer}>
        <div className={styles.formSubComponent}>
          <div className={styles.formLabelInputContainer}>
            <span>Title:</span>
            <input type="text" />
          </div>
        </div>
        <div className={styles.formSubComponent}>
          <div className={styles.formLabelInputContainer}>
            <span>Description:</span>
            <textarea id="w3review" name="w3review" rows="5" cols="50">
              At w3schools.com you will learn how to make a website. They offer
              free tutorials in all web development technologies.
            </textarea>
          </div>
        </div>
        <div className={styles.formSubComponent}>
          <div className={styles.formLabelInputContainer}>
            <span>Start Date:</span>
            <input type="date" />
          </div>
          <div className={styles.formLabelInputContainer}>
            <span>End Date:</span>
            <input type="date" />
          </div>
        </div>
        <div className={styles.formSubComponent}>
          <div className={styles.formLabelInputContainer}>
            <span>Assignee:</span>
            <select>
              <option value="manager">Manager</option>
              <option value="teamLead">Team Lead</option>
            </select>
          </div>
          <div className={styles.formLabelInputContainer}>
            <span>Status:</span>
            <select>
              <option value="open">Open</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
        <div className={styles.formSubComponent}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
