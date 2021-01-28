import { defineMessage } from "react-intl";

const translateMessages = defineMessage({
    addTask: {
        id: "app.add_task",
        defaultMessage: "Add new task"
    },
    editTask: {
        id: "app.edit_task",
        defaultMessage: "Edit"
    },
    name: {
        id: "app.task_name",
        defaultMessage: "Task name"
    },
    incompleted: {
        id: "app.incompleted",
        defaultMessage: "Incompleted"
    },
    completed: {
        id: "app.completed",
        defaultMessage: "Completed"
    },
    save: {
        id: "app.save",
        defaultMessage: "Save"
    },
    cancel: {
        id: "app.cancel",
        defaultMessage: "Cancel"
    },
    defaultName: {
        id: "app.default_name",
        defaultMessage: "Default (Name)"
    },
    defaultStatus: {
        id: "app.default_status",
        defaultMessage: "Default (Status)"
    },
    quickSearch: {
        id: "app.quickSearch",
        defaultMessage: "Quick search"
    },
    action: {
        id: "app.action",
        defaultMessage: "Action"
    },
    deleteTask: {
        id: "app.delete_task",
        defaultMessage: "Delete"
    },
    alertFillName: {
        id: "app.alert_fill_name",
        defaultMessage: "Name must be filled !"
    },
    status: {
        id: "app.status",
        defaultMessage: "Status"
    }
})

export default translateMessages