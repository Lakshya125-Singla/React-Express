import React, { useMemo } from "react";

function TaskStats({ tasks }) {
  const stats = useMemo(() => {
    console.log("Recalculating stats...");
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  return (
    <div className="alert alert-info mt-3">
      <strong>Total:</strong> {stats.total} |{" "}
      <strong>Completed:</strong> {stats.completed} |{" "}
      <strong>Pending:</strong> {stats.pending}
    </div>
  );
}

export default TaskStats;
