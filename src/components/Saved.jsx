"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { motion } from "framer-motion";

const Saved = ({ savedNotes, setSavedNotes }) => {
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filter, setFilter] = useState("all");

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

  const filteredNotes =
    filter === "all" ? savedNotes : savedNotes.filter((note) => note.direction === filter);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between mb-4">
        <Button variant={filter === "inbound" ? "default" : "outline"} onClick={() => setFilter("inbound")}>
          Inbound
        </Button>
        <Button variant={filter === "outbound" ? "default" : "outline"} onClick={() => setFilter("outbound")}>
          Outbound
        </Button>
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
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
                  <h3 className="font-medium">MCN/Case ID: {note.mcn_case_id}</h3>
                </div>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(note.id)}>
                  Delete
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default Saved;
