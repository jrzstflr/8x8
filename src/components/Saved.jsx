"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { motion } from "framer-motion";

const Saved = ({ savedNotes, setSavedNotes }) => {
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filter, setFilter] = useState("all");
  const [editingNote, setEditingNote] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleDelete = (noteId) => {
    setSavedNotes((prev) => prev.filter((n) => n.id !== noteId));
  };

  const handleBulkDelete = () => {
    setSavedNotes((prev) => prev.filter((n) => !selectedNotes.includes(n.id)));
    setSelectedNotes([]);
    setSelectAll(false);
  };

  const handleSelectNote = (noteId) => {
    setSelectedNotes((prev) =>
      prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedNotes([]);
    } else {
      setSelectedNotes(savedNotes.map((note) => note.id));
    }
    setSelectAll(!selectAll);
  };

  const handleEdit = (note) => {
    setEditingNote(note.id);
    setEditedText(note.mcn_case_id);
  };

  const handleSaveEdit = (noteId) => {
    setSavedNotes((prev) =>
      prev.map((note) => (note.id === noteId ? { ...note, mcn_case_id: editedText } : note))
    );
    setEditingNote(null);
  };

  const filteredNotes =
    filter === "all" ? savedNotes : savedNotes.filter((note) => note.direction === filter);

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <div className="bg-gray-800 text-white py-8">
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white shadow-lg rounded-lg">
      <div className="flex justify-between mb-4">
        <Button variant={filter === "inbound" ? "default" : "outline"} onClick={() => setFilter("inbound")} className="text-black">
          Inbound
        </Button>
        <Button variant={filter === "outbound" ? "default" : "outline"} onClick={() => setFilter("outbound")} className="text-black">
          Outbound
        </Button>
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} className="text-black">
          All
        </Button>
      </div>

      {savedNotes.length > 0 && (
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="w-4 h-4" />
            <span>Select All</span>
          </label>
          <Button variant="destructive" size="sm" onClick={handleBulkDelete} disabled={selectedNotes.length === 0}>
            Delete Selected
          </Button>
        </div>
      )}

      <ScrollArea className="h-[600px] w-full rounded-md border p-4">
        {filteredNotes.length === 0 ? (
          <p className="text-center text-gray-500">No saved notes yet</p>
        ) : (
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <motion.div key={note.id} className="p-4 border rounded-lg flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedNotes.includes(note.id)}
                    onChange={() => handleSelectNote(note.id)}
                    className="w-4 h-4"
                  />
                </label>
                <div className="flex-1 ml-2">
                  {editingNote === note.id ? (
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className="p-2 border rounded text-black"
                    />
                  ) : (
                    <h3 className="font-medium">MCN/Case ID: {note.mcn_case_id}</h3>
                  )}
                </div>
                <div className="flex gap-2">
                  {editingNote === note.id ? (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                      onClick={() => handleSaveEdit(note.id)}
                    >
                      Save
                    </motion.button>
                  ) : (
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      onClick={() => handleEdit(note)}
                    >
                      Edit
                    </motion.button>
                  )}
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                    onClick={() => handleDelete(note.id)}
                  >
                    Delete
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
    </div>
  );
};

export default Saved;
