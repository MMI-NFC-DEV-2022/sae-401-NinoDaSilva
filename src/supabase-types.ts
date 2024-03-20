export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      collection: {
        Row: {
          id: number
          nom_collection: string | null
        }
        Insert: {
          id?: number
          nom_collection?: string | null
        }
        Update: {
          id?: number
          nom_collection?: string | null
        }
        Relationships: []
      }
      film: {
        Row: {
          affiche_film: string | null
          budget_film: number | null
          created_at: string
          date_sortie: string | null
          duree_film: string | null
          id: number
          synopsis_film: string | null
          titre_film: string | null
          trailer: string | null
        }
        Insert: {
          affiche_film?: string | null
          budget_film?: number | null
          created_at?: string
          date_sortie?: string | null
          duree_film?: string | null
          id?: number
          synopsis_film?: string | null
          titre_film?: string | null
          trailer?: string | null
        }
        Update: {
          affiche_film?: string | null
          budget_film?: number | null
          created_at?: string
          date_sortie?: string | null
          duree_film?: string | null
          id?: number
          synopsis_film?: string | null
          titre_film?: string | null
          trailer?: string | null
        }
        Relationships: []
      }
      film_collection: {
        Row: {
          collection: number | null
          film: number | null
          id: number
        }
        Insert: {
          collection?: number | null
          film?: number | null
          id?: number
        }
        Update: {
          collection?: number | null
          film?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_collection_collection_fkey"
            columns: ["collection"]
            isOneToOne: false
            referencedRelation: "collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_collection_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "film"
            referencedColumns: ["id"]
          },
        ]
      }
      film_genre: {
        Row: {
          film: number | null
          genre: number | null
          id: number
        }
        Insert: {
          film?: number | null
          genre?: number | null
          id?: number
        }
        Update: {
          film?: number | null
          genre?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_film_genre_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "film"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_film_genre_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "genre"
            referencedColumns: ["id"]
          },
        ]
      }
      genre: {
        Row: {
          id: number
          nom_genre: string | null
        }
        Insert: {
          id?: number
          nom_genre?: string | null
        }
        Update: {
          id?: number
          nom_genre?: string | null
        }
        Relationships: []
      }
      personne: {
        Row: {
          created_at: string
          date_naissance: string | null
          id: number
          nationalite_personne: string | null
          nom_personne: string | null
          sexe_personne: string | null
          ville_naissance: string | null
        }
        Insert: {
          created_at?: string
          date_naissance?: string | null
          id?: number
          nationalite_personne?: string | null
          nom_personne?: string | null
          sexe_personne?: string | null
          ville_naissance?: string | null
        }
        Update: {
          created_at?: string
          date_naissance?: string | null
          id?: number
          nationalite_personne?: string | null
          nom_personne?: string | null
          sexe_personne?: string | null
          ville_naissance?: string | null
        }
        Relationships: []
      }
      personne_film: {
        Row: {
          film: number | null
          id: number
          nom_personnage: string | null
          personne: number | null
          role: string | null
        }
        Insert: {
          film?: number | null
          id?: number
          nom_personnage?: string | null
          personne?: number | null
          role?: string | null
        }
        Update: {
          film?: number | null
          id?: number
          nom_personnage?: string | null
          personne?: number | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_acteur_film_acteur_fkey"
            columns: ["personne"]
            isOneToOne: false
            referencedRelation: "personne"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_acteur_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "film"
            referencedColumns: ["id"]
          },
        ]
      }
      plateforme: {
        Row: {
          id: number
          logo_plateforme: string | null
          nom_plateforme: string | null
        }
        Insert: {
          id?: number
          logo_plateforme?: string | null
          nom_plateforme?: string | null
        }
        Update: {
          id?: number
          logo_plateforme?: string | null
          nom_plateforme?: string | null
        }
        Relationships: []
      }
      plateforme_film: {
        Row: {
          film: number | null
          id: number
          plateforme: number | null
        }
        Insert: {
          film?: number | null
          id?: number
          plateforme?: number | null
        }
        Update: {
          film?: number | null
          id?: number
          plateforme?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_plateforme_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "film"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_plateforme_film_plateforme_fkey"
            columns: ["plateforme"]
            isOneToOne: false
            referencedRelation: "plateforme"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
